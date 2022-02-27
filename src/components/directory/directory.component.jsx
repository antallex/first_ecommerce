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
          linkUrl:'hats',
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/pQQfX9h/jackets.png',
          id: 2,
          linkUrl:'jackets',
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/CbPmhND/sneackers.png',
          id: 3,
          linkUrl:'sneakers',
        },
        {
          title: 'womens',
          size: 'large',
          imageUrl: 'https://i.ibb.co/NKjzVH8/womens.png',
          id: 4,
          linkUrl:'womens',
        },
        {
          title: 'mens',
          size: 'large',
          imageUrl: 'https://i.ibb.co/PZ4ZkP9/mens.png',
          id: 5,
          linkUrl:'mens',
        },
      ],
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
export default Directory;
