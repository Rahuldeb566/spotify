import React from 'react';
import './Sidebar.css';
import SidebareOption from './SidebareOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className='sidebar'>
        <img className='sidebar_logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />

        <SidebareOption Icon={HomeIcon} title="Home" />
        <SidebareOption Icon={SearchIcon} title="Search" />
        <SidebareOption Icon={LibraryMusicIcon} title="Your Library" />
        <br />
        <strong className='sidebar_title'>PLAYLISTS</strong>
        <hr />

        {playlists?.items?.map(playlist => (
          <SidebareOption title={playlist.name} />
        ))}

        {/* <SidebareOption title='Hip Hop' />
        <SidebareOption title='Rock' />
        <SidebareOption title='RnB' /> */}
    </div>
  )
}

export default Sidebar