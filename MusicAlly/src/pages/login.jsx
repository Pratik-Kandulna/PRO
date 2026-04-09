import './login.css'

function Login(){
return(
<div>
  <div className='logoSpace'>
    <img src="/images/MusicAlly.jpg" alt="MusicAlly Logo"/>
  </div>
  <div className='OuterBorder'>
    <div className='login'>
        Login
    </div>
    <div className='email'>
        <label>e-mail</label>
        <input type='email' placeholder='abc12@email.com'/>
    </div>
    
    <div className='pass'>
    <label>Password</label>
    <input type='password' placeholder='*****'/>
    </div>
    <button className='submit'>Login</button> 
    <div className='margin'>
    <a href="#">Forgot Password?</a>
    </div>

  </div>
</div>
)
}
export default Login;