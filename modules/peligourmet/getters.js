exports.annonces = ['annonces'];
exports.loggedInUser = ['loggedInUser'];
exports.getAnnonceById = function (id) {
    return [
        ['annonces'],
        function (annonces) {
            return annonces.get(id);
        }
    ]
}
