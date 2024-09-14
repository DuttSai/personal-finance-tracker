import './Register.css'
export const Register = () =>{
return(
    <div className="register">
        <h1>Register</h1>
        <form className='form'>
            <label for = 'firstname'> First Name:</label>
            <input type="text" name="firstName" id="firstname" placeholder="FirstName"/>
            <label for = 'lastName' > Last Name:</label>
            <input type="text" name="lastName" id="lastName" placeholder="LastName"/>
            <label for = 'email' > Email:</label>
            <input type="text" name="email" id="email" placeholder="Email"/>
            <label for = 'password' > Password:</label>
            <input type="text" name="password" id="password" placeholder="Password"/>
        </form>
    </div>
    
)
}