import SideBar from '../../components/sideBar/SideBar';
export default function Profile() {
  return (
        <div style={{ display: 'flex' }}>
      <SideBar />
      <div style={{ marginLeft: '280px', padding: '20px' }}>
        <h1>Profile Page Content</h1>
      </div>
    </div>
  )
}