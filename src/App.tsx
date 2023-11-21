import { useEffect, useState } from 'react'
import './App.css'
import Update from './components/UpdateBtn/Update';
import Messages from './components/Messages/Messages';
import Input from './components/Input/Input';
import { IMessage } from './module';

export const App = () => {
  const [content, setContent] = useState<string>('');
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const loadData = () => {
    fetch('http://localhost:7070/notes')
      .then(result => result.json())
      .then(data => setMessages([...data]))
  }

  const handleUpdate = () => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
      clearTimeout(timeoutId);
    }, 1000)
    loadData();
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!content) return;

    const data = {
      content: content.trim(),
    };

    const onSendData = JSON.stringify(data);
    
    fetch('http://localhost:7070/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: onSendData,
    })

    setContent('');
    loadData();
  }

  const handleChange = (e: React.ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setContent(value);
  }

  const handleDelete = (e: React.MouseEvent) => {
    const { id } = e.target as HTMLButtonElement;
    fetch(`http://localhost:7070/notes/${id}`, {
      method: 'DELETE',
    }).then(() => loadData());
  }


  useEffect(loadData, []);

  useEffect(() => {
    loadData()
  }, [messages])

  return (
    <div className='container'>
      <Update onUpdate={handleUpdate} />
      {loading ? <p>loading</p> : ''}
      <Messages onDelete={handleDelete} messages={messages} />
      <Input onSubmit={handleSubmit} onChange={handleChange} content={content} />
    </div>
  )
}
