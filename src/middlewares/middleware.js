const { z } = require("zod");

const alunoSchema = z.object({
    nome: z.string().min(3),
    email: z.string().email()
});

function middleware(schema = null) {

    return (req, res, next) => {

        console.log(req.method, req.url);

        if (schema) {
            try {
                req.body = schema.parse(req.body);
            } catch (error) {
                return next(error);
            }
        }

        next();
    };
}

module.exports = {
    middleware,
    alunoSchema
};