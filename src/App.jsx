
import './App.css';
import photo from './mm.jpeg';

    const etudiant = {
        nom: "mariam saafi",
        email:"saafimariam@gmail.com",
        telephone:"28000000",
        filiere:"genie logiciel et systemes d information ",
        annee :"2ème année",
        groupe :"GLSI B",
        ville:"mahdia",
    }
function app(){

    return (
        <div className="page">
        <div className="carte">
            <img src={photo} alt="photo etudiant" className='photo' />
            <h1>Fiche etudiant</h1>
            <p>
                <strong>Nom :</strong> {etudiant.nom}
            </p>
            <p>
                <strong>Email :</strong> {etudiant.email}
            </p>
            <p>
                <strong>Telephone :</strong> {etudiant.telephone}
            </p>
            <p>
                <strong>Filiere :</strong> {etudiant.filiere}
            </p>
            <p>
                <strong>Annee :</strong> {etudiant.annee}
            </p>
            <p>
                <strong>Groupe :</strong> {etudiant.groupe}
            </p>
            <p>
                <strong>ville :</strong> {etudiant.ville}
            </p>
            <a className='bouton' href={`mailto:${etudiant.email}`}>contacter</a>
        </div>
        </div>
    )
}

export default app;
