import next from 'next';
import { useRouter } from 'next/navigation';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the Dashboard page.</p>
       {/* const router = useRouter();
      router.push('/admin/login'); */}
      <button onClick={() => router.push('/admin/login')}>Admin Login</button>
    </div>
  );
}

export default Dashboard;