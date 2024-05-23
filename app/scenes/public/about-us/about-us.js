export function AboutUsPage(){
    

    const pageContent =   `
        <div>
            <h1>About Us</h1>
            <p>We are a team of developers working to create the best software for our clients.</p>
        </div>
    `;
    const logic = () => {
        console.log('hola')
      };

    return {
        pageContent,
        logic
    }
}