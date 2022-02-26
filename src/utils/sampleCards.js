const makeCard = (message, drawing, signatureData) => ({
  message,
  drawing,
  signature: {isDrawn: false, data: signatureData},
});

const sampleCards = [
  makeCard('Happy birthday', '', 'Bob'),
  makeCard('Congratulations on making it another year!', '', 'Helen'),
  makeCard('HBD', '', 'Siri'),
  makeCard('You make every day not completely miserable.', '', 'Mom'),
  makeCard('May your year be filled with yummy beans', '', 'Jamie'),
  makeCard('Thank you for birthing me :)', '', 'Son'),
  makeCard('LETS GET FREAKING LITTTTTTTTTTT', '', 'Dr. G'),
  makeCard('Google.com', '', 'Places to buy bread'),
];

export default sampleCards;
