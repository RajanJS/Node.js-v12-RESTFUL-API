import cool from 'cool-ascii-faces';

const getRequestData = req => ({
    method: req.method,
    path: req.path,
    headers: req.headers,
    host: req.hostname,
    baseUrl: req.baseUrl,
    ip: req.ip,
    message: `Handling ${req.method} request from @Rajan Maharjan's API End : ${cool()}`
});

const getRoot = async (req, res) => {
    res.json(getRequestData(req));
};

const postRoot = async (req, res) => {
    res.json(getRequestData(req));
};

const putRoot = async (req, res) => {
    res.json(getRequestData(req));
};

const deleteRoot = async (req, res) => {
    res.status(501).json(getRequestData(req));
};

export const rootControllers = {
    getRoot,
    postRoot,
    putRoot,
    deleteRoot
};