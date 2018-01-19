const apiKey = 'LAtMuVD9VIPbTtOWpZxj3Dbhg5NMfk8ygJpSttGQmylSkS7CZB0k6i6KY1m9tAm6Ga9v--_FlkkN39Eef7hRZjMWnFyckQsYgFdHRI9d-xEhJ3bHFKH7QDeXAuNcWnYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: { Authorization: `Bearer ${apiKey}` }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    let businessObject = {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                    return businessObject;
                });

            }
        });
    }
};

export default Yelp;