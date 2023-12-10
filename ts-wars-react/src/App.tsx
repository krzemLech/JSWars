import './App.css'
import { useState } from 'react';
import Header from './components/Header'
import Todos from './components/Todos'
import { navLinks } from './config/nav-links'
import { QueryClient, QueryClientProvider } from 'react-query'
import { UserRole } from './utils/enums'
import UserAlert from './components/UserAlert'
import CharacterList from './components/CharactersList';

const queryClient = new QueryClient()

const mockStore = { user: { role: UserRole.Staff } }

function App() {
  const [display, setDisplay] = useState<'Todos' | 'Characters' | null>(null)

  return (
   <div className="App">
    <Header title="Todo Wars" links={navLinks} changeDisplay={setDisplay}/>
    <QueryClientProvider client={queryClient}>
      <main className='container mx-auto pt-12'>
      <UserAlert role={mockStore.user.role} />
      {display === 'Todos' && <Todos />}
      {display === 'Characters' && <CharacterList />}
      </main>
    </QueryClientProvider>
   </div>
  )
}

export default App
