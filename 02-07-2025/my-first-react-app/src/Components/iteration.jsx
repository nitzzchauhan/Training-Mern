export let Batch = () => {
  const Students = ["Rohan", "Amits", "Rahul","satwik"];

  return (
    <>
      <h1>How Many Students are there in my Batch?</h1>
      <ul>
        {Students.map((element, index) => {
          return (
            <li key={index} >
              Student {index + 1}: {element}
            </li>
          );
        })}
      </ul>
    </>
  );
};

// let Coordinator = (props) => {
//   console.log(props.studentList);
//   return (
//     <>
//       <h1>Following Students are there:</h1>
//       {props.studentList.map((element, index) => {
//         return <h1>Student {index+1}: {element}</h1>
//       })}
//     </>
//   );
// };
