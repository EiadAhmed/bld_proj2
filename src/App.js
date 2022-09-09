import "./App.css";
import Tab from "./components/Tab";
import image1 from "./photo/python1.png";
import image2 from "./photo/python2.png";
import image3 from "./photo/python3.png";
import image4 from "./photo/python4.png";
import image5 from "./photo/python5.png";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Tab
        title="Expand your career opportunities with Python"
        desc="Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to..."
        courses={[
          {
            id: 1,
            imgSrc: { image1 },
            title: "Learn Python: The Complete Python Programming Course",
            desc: "Avinash Jain, The Codex",
            ratingVal: 4.4,
            newPrice: "E£679.99",
            oldPrice: "E£699.99",
          },
          {
            id: 2,
            imgSrc: { image2 },
            title: "Learning Python for Data Analysis and Visualization",
            desc: "jose portila",
            ratingVal: 4.4,
            newPrice: "E£679.99",
            oldPrice: "E£699.99",
          },
          {
            id: 3,
            imgSrc: { image3 },
            title: "Python for Beginners - Learn Programming from scratch",
            desc: "Edwin Diaz, Coding Faculty Solutions",
            ratingVal: 4.4,
            newPrice: "E£679.99",
            oldPrice: "E£699.99",
          },
          {
            id: 4,
            imgSrc: { image4 },
            title: "Learn Python: Python for Beginners",
            desc: "Abrar Hussain",
            ratingVal: 4.4,
            newPrice: "E£679.99",
            oldPrice: "E£699.99",
          },
          {
            id: 5,
            imgSrc: { image5 },
            title: "Python Beyond the Basics - Object-Oriented Programming",
            desc: "Infinite Skills",
            ratingVal: 4.4,
            newPrice: "E£679.99",
            oldPrice: "E£699.99",
          },
        ]}
      ></Tab>
    </div>
  );
}

export default App;
