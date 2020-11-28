package com.team3.smarttour;

import org.apache.jena.query.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class FusekiService {

    static String service1Endpoint = "http://ec2-18-217-162-115.us-east-2.compute.amazonaws.com:3030/OwlTest/query";

    public String createQuery(String roomName) {
        String str = "\n" +
                "SELECT ?subject ?predicate ?object \n"+
                "WHERE { \n"+
                "?subject ?predicate ?object \n"+
                "}LIMIT 25";
        return str;
    }

    public List<Artwork> getArtworkDetails(String roomName) {
        String query = createQuery(roomName);
        return loadArtwork(service1Endpoint, query);
    }

    private List<Artwork> loadArtwork(String uri, String query) {

        QueryExecution qexec = QueryExecutionFactory.sparqlService(uri, query);
        ResultSet result = qexec.execSelect();
        ResultSetFormatter.out(System.out, result);
//        List<String> columns = new ArrayList<String>();
//        for (String col: result.getResultVars()) {
//            columns.add(col);
//        }
        Artwork details = new Artwork();
        for ( ; result.hasNext() ; ) {

            QuerySolution soln = result.nextSolution() ;
            System.out.println(soln.get("predicate"));
//            System.out.println(soln.getLiteral("predicate").getValue());
//            System.out.println(soln.getLiteral("object").getValue());
//            details.setClassification(soln.getLiteral("classification").toString());
//            details.setArtistId((int) soln.getLiteral("artistId").getValue());
//            details.setHeight((float) soln.getLiteral("height").getValue());
//            details.setAcquisitionDate(soln.getLiteral("acquisitionDate").toString());
//            details.setArtworkTitle(soln.getLiteral("artworkTitle").toString());
//            details.setBirthYear((int) soln.getLiteral("birthYear").getValue());
//            details.setCreationDate(soln.getLiteral("creationDate").toString());
//            details.setCredit(soln.getLiteral("credit").toString());
//            details.setDeathYear((int) soln.getLiteral("deathYear").getValue());
//            details.setDepartment(soln.getLiteral("department").toString());
//            details.setDimension(soln.getLiteral("dimension").toString());
//            details.setGender(soln.getLiteral("gender").toString());
//            details.setLocationArtworkID((int) soln.getLiteral("locationArtworkID").getValue());
//            details.setMedium(soln.getLiteral("medium").toString());
//            details.setName(soln.getLiteral("name").toString());
//            details.setNationality(soln.getLiteral("nationality").toString());
//            details.setWidth((float) soln.getLiteral("width").getValue());




        }
        List<Artwork> detailsList = new ArrayList<>();
        detailsList.add(details);
        return detailsList;
    }

}
