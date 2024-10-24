// components/ModulesList.jsx
import { useEffect, useState } from 'react';
import { getAllModules } from "@/lib/supabaseModule"; // Import your function directly

const ModulesList = () => {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const data = await getAllModules(); // Call the function directly
        setModules(data); // Store the data directly in state
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchModules();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Modules List</h1>
      <ul>
        {modules.map(module => (
          <li key={module.slug}>
            <h2>{module.title}</h2>
            <p>{module.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModulesList;