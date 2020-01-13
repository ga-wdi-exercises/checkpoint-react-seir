


function Contact(){
  console.log()
}
const contacts {
    name: "Tweety",
    email: "tweety@gmail.com",
    profile_picture: "https://upload.wikimedia.org/wikipedia/en/0/02/Tweety.svg"
  }

  return (
    <div className="contact">
      <img src={contacts.profile_picture} alt="Profile Pic" />
      <h3>contacts.name</h3>
      <h4>contacts.email</h4>
    </div>
  )