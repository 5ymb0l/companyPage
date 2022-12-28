// import React, { useEffect, useState } from "react";
// import { useRef } from "react";
// // import { AiFillEdit, AiFillDelete } from "react-icons/ai";
// // import { MdDone } from "react-icons/md";
// import { Todo } from "./model";
// // import {Box} from '@mui/material'
// // import { Draggable } from "react-beautiful-dnd";

// export const EditForm: React.FC<{
//   index: number;
//   todo: Todo;
//   todos: Array<Todo>;
//   setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
// }> = ({ index, todo, todos, setTodos }) => {
//   const [edit, setEdit] = useState<boolean>(false);
//   const [editTodo, setEditTodo] = useState<string>(todo.todo);

//   const inputRef = useRef<HTMLInputElement>(null);
//   useEffect(() => {
//     inputRef.current?.focus();
//   }, [edit]);

//   const handleEdit = (e: React.FormEvent, id: number) => {
//     e.preventDefault();
//     setTodos(
//       todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
//     );
//     setEdit(false);
//   };

//   const handleDelete = (id: number) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   //   const handleDone = (id: number) => {
//   //     setTodos(
//   //       todos.map((todo) =>
//   //         todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
//   //       )
//   //     );
//   //   };

//   return (
//     // <Box draggableId={todo.id.toString()} index={index}>
//     //   {(provided, snapshot) => (
//     <form
//       onSubmit={(e) => handleEdit(e, todo.id)}
//       //   {...provided.draggableProps}
//       //   {...provided.dragHandleProps}
//       //   ref={provided.innerRef}
//       //   className={`todos_single ${snapshot.isDragging ? "drag" : ""}`}
//     >
//       {edit ? (
//         <input
//           value={editTodo}
//           onChange={(e) => setEditTodo(e.target.value)}
//           className="todos_single--text"
//           ref={inputRef}
//         />
//       ) : todo.isDone ? (
//         <s className="todos_single--text">{todo.todo}</s>
//       ) : (
//         <span className="todos_single--text">{todo.todo}</span>
//       )}
//       <div>
//         <span
//           className="icon"
//           onClick={() => {
//             if (!edit && !todo.isDone) {
//               setEdit(!edit);
//             }
//           }}
//         >
//           Edit
//         </span>
//         <span className="icon" onClick={() => handleDelete(todo.id)}>
//           Delete
//         </span>
//         {/* <span className="icon" onClick={() => handleDone(todo.id)}>
//               <MdDone />
//             </span> */}
//       </div>
//     </form>
//   );
// };
// {
//   /* </Box> */
// }
// //   );
// // };

import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function AddFilter() {
  return (
    <Button startIcon={<AddIcon/>}> Add More</Button>
    // <Box>
    //   <FormControl component="fieldset">
    //     {/* <h1 id='Filter'> Filter</h1> */}
    //     <FormLabel component="legend">Filter</FormLabel>
    //     <FormLabel component="legend">Display</FormLabel>
    //     {/* <h2> Display</h2> */}
    //     <FormGroup aria-label="position">
    //       <FormControlLabel
    //         value="top"
    //         control={<Checkbox />}
    //         label="Immediate"
    //         // labelPlacement="top"
    //       />
    //       <FormControlLabel
    //         value="start"
    //         control={<Checkbox />}
    //         label="All"
    //         // labelPlacement="start"
    //       />
    //     </FormGroup>
    //     <FormLabel component="legend">Type</FormLabel>
    //     {/* <h2> Type</h2> */}
    //     <FormGroup>
    //       <FormGroup aria-label="position" row>
    //         <FormControlLabel
    //           value="end"
    //           control={<Checkbox />}
    //           label="Country"
    //           labelPlacement="end"
    //         />
    //         <FormControlLabel
    //           value="end"
    //           control={<Checkbox />}
    //           label="District"
    //           labelPlacement="end"
    //         />
    //       </FormGroup>
    //       <FormGroup aria-label="position" row>
    //         <FormControlLabel
    //           value="end"
    //           control={<Checkbox />}
    //           label="State"
    //           labelPlacement="end"
    //         />
    //         <FormControlLabel
    //           // value="end"
    //           control={<Checkbox />}
    //           label="Taluka"
    //            labelPlacement="end"
    //         />
    //       </FormGroup>
    //       <FormGroup>
    //         <FormControlLabel
    //           // value="end"
    //           control={<Checkbox />}
    //           label="Sanghat"
    //           // labelPlacement="end"
    //         />
    //       </FormGroup>
    //     </FormGroup>
    //     <FormLabel component="legend">Region</FormLabel>
    //     {/* <h2> Type</h2> */}
    //     <FormGroup>
    //       <FormGroup aria-label="position" row>
    //         <FormControlLabel
    //           // value="bottom"
    //           control={<Checkbox />}
    //           label="Vadodara"
    //           // labelPlacement="bottom"
    //         />
    //         <FormControlLabel
    //           // value="end"
    //           control={<Checkbox />}
    //           label="Valsad"
    //           // labelPlacement="end"
    //         />
    //       </FormGroup>
    //       <FormGroup aria-label="position" row>
    //         <FormControlLabel
    //           // value="bottom"
    //           control={<Checkbox />}
    //           label="Surat"
    //           // labelPlacement="bottom"
    //         />
    //         <FormControlLabel
    //           // value="end"
    //           control={<Checkbox />}
    //           label="Ahmedabad"
    //           // labelPlacement="end"
    //         />
    //       </FormGroup>
    //     </FormGroup>
    //   </FormControl>
    // </Box>
  );
}
