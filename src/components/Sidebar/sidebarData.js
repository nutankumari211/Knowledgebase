import { 
  Bot, 
  BrainCircuit, 
  Library, 
  BookOpenCheck,
  Server,
  ListMinus,
  Zap,
  Briefcase,
  ActivitySquare,
  Shield,
  BookMarked,
  KeyRound,
  Building,
  Puzzle
} from 'lucide-react';

export const menuItems = [
  {
    title: 'MY PROJECTS',
    items: [
      { name: 'Agents', icon: Bot },
      { name: 'AI Models', icon: BrainCircuit },
      { name: 'Library', icon: Library },
    ],
  },
  {
    title: 'ORCHESTRATOR',
    items: [
      { name: 'Published', icon: BookOpenCheck },
      { name: 'Machines', icon: Server },
      { name: 'Queues', icon: ListMinus },
      { name: 'Triggers', icon: Zap },
      { name: 'Jobs', icon: Briefcase },
      { name: 'Executions', icon: ActivitySquare },
      { name: 'Vault', icon: Shield },
      { name: 'Knowledge Base', icon: BookMarked },
      { name: 'Key Store', icon: KeyRound },
    ],
  },
  {
    title: 'ADMIN',
    items: [
      { name: 'Tenant', icon: Building },
      { name: 'Integrations', icon: Puzzle },
    ],
  },
];
