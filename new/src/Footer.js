const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return ( 
        <footer className="sticky">
        <p> copyright<i className="fa-solid fa-copyright "></i> {year}</p>
        </footer>
      
     );
}
 
export default Footer;