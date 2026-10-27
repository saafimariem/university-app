function StudentCard({ prenom, nom, email, telephone, filiere }) {
  return (
    <div className="student-card">
      <h2>{prenom} {nom}</h2>

      <p><strong>Email :</strong> {email}</p>
      <p><strong>Téléphone :</strong> {telephone}</p>
      <p><strong>Filière :</strong> {filiere}</p>

      <a href={`mailto:${email}`} className="bouton">
        Contacter
      </a>
    </div>
  );
}

export default StudentCard;