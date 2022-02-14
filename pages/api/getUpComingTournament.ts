// TODO ts対応
import upcomingDatas from "../../lib/upcomingDatas";

const handler = async (req, res) => {
    const result = await upcomingDatas();
    res.status(200).json({
        results: result
    });
};
export default handler;