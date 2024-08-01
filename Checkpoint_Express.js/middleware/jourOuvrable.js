const jourOuvrable = (req, res, next) => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  // Vérifiez si c'est du lundi au vendredi (1 à 5) et entre 9h et 17h
  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next();
  } else {
    res.status(403).sendFile(path.join(__dirname, '/views/error.ejs'));
  }
  };
module.exports = jourOuvrable;