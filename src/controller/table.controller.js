export const addData = (req, res) => {
  const { productName, status, customer, shopkeeper } = req.body;

  // Simulate adding data to the table
  

  // Respond with a success message
  res.status(200).json({
    message: `Data added to ${productName} successfully!`,
    data: { productName, customer, shopkeeper },
  });
};
