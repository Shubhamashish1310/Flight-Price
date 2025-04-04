export const info = (req, res) => {
    res.status(500).json({
        success: true,
        message: 'API is working',
        data: {
            name: 'Shubham',
            age: 25,
            city: 'Delhi',
        },
        
    });
};