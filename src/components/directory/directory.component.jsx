import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/6HbT255/hats.png',
          id: 1,
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/pQQfX9h/jackets.png',
          id: 2,
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/CbPmhND/sneackers.png',
          id: 3,
        },
        {
          title: 'womens',
          size: 'large',
          imageUrl: 'https://i.ibb.co/NKjzVH8/womens.png',
          id: 4,
        },
        {
          title: 'mens',
          size: 'large',
          imageUrl: 'https://i.ibb.co/PZ4ZkP9/mens.png',
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, size, imageUrl, id }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
export default Directory;
