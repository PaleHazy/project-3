const INITIAL_STATE = {
  // sections: [
  //     {
  //       title: 'hats',
  //       imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
  //       id: 1,
  //       linkUrl: 'shop/hats'
  //     },
  //     {
  //       title: 'jackets',
  //       imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
  //       id: 2,
  //       linkUrl: 'shop/jackets'
  //     },
  //     {
  //       title: 'sneakers',
  //       imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
  //       id: 3,
  //       linkUrl: 'shop/sneakers'
  //     },
  //     {
  //       title: 'womens',
  //       imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
  //       size: 'large',
  //       id: 4,
  //       linkUrl: 'shop/womens'
  //     },
  //     {
  //       title: 'mens',
  //       imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
  //       size: 'large',
  //       id: 5,
  //       linkUrl: 'shop/mens'
  //     }
  //   ]
  sections: [
    {
      title: "extensions",
      id:1,
      imageUrl:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      linkUrl: "shop/extensions",
      small: true
    },
    {
      title: "plugins",
      id:2,
      imageUrl:
        "https://images.unsplash.com/photo-1531492643958-bf0c4c4c441a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      linkUrl: "shop/plugins",
      small: true
    },
    {
      title: "themes",
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1560472355-a3b4bcfe790c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      linkUrl: "shop/themes",
      small: true
    },
    {
      title: "tutorials",
      id:4,
      imageUrl:
        "https://images.unsplash.com/photo-1509869175650-a1d97972541a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      linkUrl: "shop/tutorials",
      small: false
    },
    {
      title: "books",
      id: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=541&q=80",
      linkUrl: "shop/books",
      small: false
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
