
import Header from "./components/Header";

import Navbar from "./components/Navbar";

import StudentCard from "./components/StudentCard";

import Footer from "./components/Footer";

import "./App.css";

function App() {

  const etudiants = [

    {

      prenom: "Slim",

      nom: "Boubaker",

      email: "slim@example.com",

      telephone: "20111222",

      filiere: "Génie logiciel",

    },

    {

      prenom: "Sarra",

      nom: "Trabelsi",

      email: "sarra@example.com",

      telephone: "22123456",

      filiere: "Informatique",

    },

    {

      prenom: "Mariem",

      nom: "Khalfallah",

      email: "mariem@example.com",

      telephone: "55123456",

      filiere: "Réseaux",

    },

  ];

  return (

    <div className="app" id="accueil">

      <Header />

      <Navbar />

      <main className="container" id="etudiants">

        <h2 className="titre">Liste des étudiants</h2>

        <div className="student-list">

          {etudiants.map((etudiant) => (

            <StudentCard

              key={etudiant.email}

              prenom={etudiant.prenom}

              nom={etudiant.nom}

              email={etudiant.email}

              telephone={etudiant.telephone}

              filiere={etudiant.filiere}

            />

          ))}

        </div>

      </main>

      <Footer />

    </div>

  );

}

export default App;

