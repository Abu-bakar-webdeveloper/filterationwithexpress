


const addData = (req, res) => {
  const { tableName, data } = req.body;

  // Simulate adding data to the table
  console.log(`Adding data to ${tableName}:`, data);

  // Respond with a success message
  res.status(200).json({
    message: `Data added to ${tableName} successfully!`,
    data: data,
  });
}