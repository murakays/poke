// TODO ts対応
const handler = (req, res) => {
    res.status(200).json({ data: { message: `hello ${req.query.name}` } });
};
export default handler;