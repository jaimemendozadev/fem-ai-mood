import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getEntries = async() => {
    const user = await getUserByClerkID();

    const entries = await prisma.journalEntry.findMany({
        where: {
            authorId: user.id
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return entries;
}

const JournalPage = async () => {
    const entries = await getEntries();

    console.log('entries ', entries);
    return <h1>Journal</h1>
}

export default JournalPage;