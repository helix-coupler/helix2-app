import { Welcome } from '../components/Welcome/Welcome';
import { Header } from '../components/Header/Header';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

const data = {
  user: {
    name: 'vitalik',
    email: 'vitalik@helix2.dev',
    image: 'https://images.unsplash.com/photo-1639843906796-a2c47fc24330',
  },
  tabs: ['Names', 'Bonds', 'Molecules', 'Polycules', 'Forums', 'Support'],
};

export default function HomePage() {
  return (
    <>
      <div
        style={{
          marginLeft: '50%',
        }}
      >
        <ColorSchemeToggle />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Header user={data.user} tabs={data.tabs} />
      </div>
      <Welcome />
    </>
  );
}
