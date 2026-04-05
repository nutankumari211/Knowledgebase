import { useState, useEffect } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';

const CreateNewModal = ({ isOpen, onClose, onSubmit, editData }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [vectorStore, setVectorStore] = useState('Qdrant');
  const [llm, setLlm] = useState('text-embedding-ada-002');
  const [error, setError] = useState('');

  // Lock and pre-fill form when editData arrives
  useEffect(() => {
    if (editData && isOpen) {
      setName(editData.title);
      setDescription(editData.description === 'No description provided.' ? '' : editData.description);
      // In a real app, vectorStore/llm would be on editData. For now we use defaults.
      setError('');
    } else if (!isOpen) {
      // Reset form when closed
      setName('');
      setDescription('');
      setVectorStore('Qdrant');
      setLlm('text-embedding-ada-002');
      setError('');
    }
  }, [editData, isOpen]);

  const handleClose = () => {
    setName('');
    setDescription('');
    setError('');
    onClose();
  };

  const handleCreate = () => {
    if (!name.trim()) {
      setError('Name is required');
      return;
    }

    const today = new Date();
    const formattedDate = editData?.date || `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;

    onSubmit({
      title: name,
      description: description.trim() || 'No description provided.',
      date: formattedDate
    });

    handleClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={editData ? "Update Knowledge Base" : "Create New Knowledge Base"}
      description="Best for quick answers from documents, websites and text files."
      footer={
        <div className="flex items-center gap-4">
          {error && <span className="text-red-500 text-xs font-medium">{error}</span>}
          <Button onClick={handleCreate} className="px-6">
            {editData ? "Update" : "Create"}
          </Button>
        </div>
      }
    >
      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleCreate(); }}>
        <Input 
          label="Name"
          hint="(Cannot be edited later)"
          required
          value={name}
          disabled={!!editData}
          onChange={(e) => {
            setName(e.target.value);
            if (error) setError('');
          }}
          placeholder="Name"
          error={error}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
          />
        </div>

        <Select 
          label="Vector Store"
          required
          value={vectorStore}
          onChange={(e) => setVectorStore(e.target.value)}
          options={['Qdrant', 'Pinecone', 'Milvus']}
        />

        <Select 
          label="LLM Embedding Model"
          required
          value={llm}
          onChange={(e) => setLlm(e.target.value)}
          options={['text-embedding-ada-002', 'text-embedding-3-small', 'text-embedding-3-large']}
        />
      </form>
    </Modal>
  );
};

export default CreateNewModal;
