import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import KnowledgeBaseList from './components/KnowledgeBase';
import CreateNewModal from './components/KnowledgeBase/CreateNewModal';
import { baseCards as initialCards } from './components/KnowledgeBase/data';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Knowledge Base');
  const [cards, setCards] = useState(initialCards);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#F9FAFB]">
      <Header 
        onCreateNewClick={() => setIsModalOpen(true)} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onMenuToggle={() => setIsMobileSidebarOpen(true)}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          activeTab={activeTab} 
          onTabChange={(tab) => {
            setActiveTab(tab);
            setIsMobileSidebarOpen(false);
          }} 
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />
        <main className="flex-1 overflow-hidden flex flex-col">
          {activeTab === 'Knowledge Base' ? (
            <KnowledgeBaseList 
              cards={cards}
              onCreateNewClick={() => setIsModalOpen(true)} 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center bg-[#fcfcfc]">
              <h2 className="text-3xl font-bold text-gray-300 mb-2 tracking-tight">COMING SOON</h2>
              <p className="text-gray-500 text-sm font-medium">The <span className="text-primary font-bold">{activeTab}</span> module is currently under construction.</p>
            </div>
          )}
        </main>
      </div>
      
      <CreateNewModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onAddCard={(newCard) => setCards([newCard, ...cards])}
      />
    </div>
  );
}

export default App;
