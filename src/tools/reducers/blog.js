// const intitalState = [];

// export const blogReducer = (state=intitalState,action)=>{
//     switch (action.type) {
//       case "Create_Blog":
//         return [...state,action.blog]

//         case 'Remove_Blog':
//           return state.filter((p) => p.id !== action.id);
    
//         case 'Update_Blog':
//           return state.map((item) => {
//             if (item.id == action.id) {
//               return { ...item, ...action.editdata };
//             } else {
//               return item;
//             }
//           });
      

//       default:
//         return state;
//     }
// }


export const blogReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_BLOG':
      return action.blogs;
    default:
      return state;
  }
};