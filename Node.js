const { MongoClient } = require('mongodb');

async function main() {
    // Note: It's recommended to store sensitive information like URI in environment variables for security reasons
    const uri = "mongodb+srv://Prema:Bhuvan%402006@atlascluster.lf9n8st.mongodb.net/employeeData?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Connected to MongoDB");

        // Specify the database and collection
        const dbName = 'employeeData'; // Fixed variable naming consistency
        const collectionName = 'companyInformation';

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Insert a document into the collection
        const doc = { name: "Doddanari", age: 15 };
        const result = await collection.insertOne(doc);

        // Check if the document was inserted successfully
        if (result.acknowledged) {
            console.log("Successfully inserted document into the collection");
        } else {
            console.log("Document insertion was not acknowledged by MongoDB");
        }
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
    } finally {
        // Ensure the client will close when you finish/error
        await client.close();
    }
}

main().catch(console.error);
