exports.annonces = ['annonces'];
exports.getAnnonceById = function (id) {
    return [
        ['annonces'],
        function (annonces) {
            return annonces.get(id);
        }
    ]
}
