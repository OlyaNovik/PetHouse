import {sessionService} from 'redux-react-session'
export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const signInHandler = (formData,error,SetError,navigate) => {
  return async (dispatch) => {
    // console.log({formData});

    try {
      const response = await fetch(`${SERVER_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      SetError({...error,emailError: 'block', passwordError: 'block', emailMessage:data.message,passMessage:data.message})
      // console.log(data.message);

      if (data.status === 'SUCCESS') {
        const userData = data.data[0]

        const token = userData.user_id
        
        sessionService.saveSession(token).then(() =>
          sessionService.saveUser(userData)).then(()=>{
            navigate("/")
        }).catch(err => {
          console.error(err);
        })
        // Dispatch an action or perform any other logic for a successful sign-in
      } else {
        // Handle the case where the server response indicates failure
        // You might dispatch a failure action or show an error message
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      // Handle the error, dispatch a failure action, or show an error message
    }
  };
};

export const logOutHandler = (navigate) => {
  return () => {
    
    sessionService.deleteSession().then(() => sessionService.deleteUser()).then(()=> {navigate("/")})
  };
};