export default function Check() {
    const [isOpen, setIsOpen] = useState(false);
  
    function toggle() {
      setIsOpen((isOpen) => !isOpen);
    }
  
    return (
      <div className="App">
        {isOpen && <Popup />}
        <button onClick={toggle}>Toggle show</button>
      </div>
    );
  }
  