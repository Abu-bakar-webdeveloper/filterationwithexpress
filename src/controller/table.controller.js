import Table from '../models/table.model.js';

export const addData = async (req, res) => {
  const data = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({
      message: 'Request body must be an array of table objects',
    });
  }

  try {
    const inserted = await Table.insertMany(data);
    res.status(200).json({
      message: 'Bulk data added successfully!',
      count: inserted.length,
      data: inserted,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error inserting bulk data',
      error: error.message,
    });
  }
};
