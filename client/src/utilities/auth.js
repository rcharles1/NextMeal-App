// auth.js (Client-side utility file)

/**
 * This function simulates the process of signing in with Google OAuth.
 * It interacts with the server-side OAuth implementation and handles the client-side logic.
 */
export const signInWithGoogleOAuth = async () => {
    try {
      // Redirect the user to the Google Sign-In page
      window.location.assign('https://nextmeal-server.onrender.com/auth/google');
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
};