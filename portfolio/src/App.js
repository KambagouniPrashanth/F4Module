import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import './style.css';
import Aboutme from './Components/Aboutme';
import Section from './Components/Section';
import sectionData from './Components/SectionData';

// let sectionData=[
//   {
//     title:'Skills',
//     description:'In my professional journey, I have developed a diverse skill set that includes proficiency in Java, HTML, CSS, JavaScript, OOPs (Object-Oriented Programming), and DSA (Data Structures and Algorithms)In summary, my proficiency in Java, HTML, CSS, JavaScript, OOPs, and DSA equips me to tackle diverse challenges in software development and web design. I am confident in my ability to leverage these skills to contribute effectively to any project or team.'
//   },
//   {
//     title:'Qualification',
//     description:'My name is Kambagouni Prashanth. I am from Beeravolu village . currently, I pursued mca in Rgm college. I graduated in Bsc from Sri Ramakrishna Degree college with an aggregate of 83% as well as  intermediate completed in the nandyal junior college with an aggregate of 93% and schooling from SV Chaitanya high school with an aggregate of 95.'


//   },{
//     title:'Project',
//     description:'There are three phases in the supply chain.Login stage, Looking for the product,Purchasing the Product. If the userwish to place an order, The user must besigned in, otherwise, we will be unable to place the order. After signing up, hecan log in to his account and place an order. We can also search for specificproducts and place orders here. After the order is placed, it will display the orderstatus and save the product details in the database.'


//   }
// ]

function App() {
  return (
    <div>
      <Navbar/>
      <Aboutme/>

      {
        sectionData.map((data)=>(
          <Section title={data.title} description={data.description}/>
        ))
      }
      {/* <Section
      title='Skills'
      description='java,html,css,javascript,dsa,oops,react.js'/>
      <Section
    
        title='Qualification'
        description='My name is Kambagouni Prashanth. I am from Beeravolu village . currently, I pursued mca in Rgm college. I graduated in Bsc from Sri Ramakrishna Degree college with an aggregate of 83% as well as  intermediate completed in the nandyal junior college with an aggregate of 93% and schooling from SV Chaitanya high school with an aggregate of 95.'

    
      />
      <Section
    
        title='Project'
        description='There are three phases in the supply chain.
        Login stage, Looking for the product,Purchasing the Product. If the user
        wish to place an order, The user must besigned in, otherwise, we will be unable to place the order. After signing up, hecan log in to his account and place an order. We can also search for specificproducts and place orders here. After the order is placed, it will display the orderstatus and save the product details in the database.'

    
      /> */}
    </div>
  );
}

export default App;
