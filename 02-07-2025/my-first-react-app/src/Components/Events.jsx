export default function IPL() {
  const title = (e) => {
    console.log(e.target)
    console.log(e.type)
    alert("RCB WON THE 2025 TITLE");
  };

  return <button onClick={title}>Event</button>;
}
