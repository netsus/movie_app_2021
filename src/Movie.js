import React from "react";
import PropTyeps from "prop-types";

function Movie({id, year, title, summary, poster}){
    return <h1></h1>
}

Movie.propTypes = {
    id: PropTyeps.number.isRequired,
    year: PropTyeps.number.isRequired,
    title: PropTyeps.string.isRequired,
    summary: PropTyeps.string.isRequired,
    poster: PropTyeps.string.isRequired,



}