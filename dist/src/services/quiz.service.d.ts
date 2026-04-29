export declare const listQuizzes: () => Promise<{
    id: number;
    title: string;
    description: string | null;
}[]>;
type ListQuizQuestionsInput = {
    quizId: number;
    limit: number;
    offset: number;
};
export declare const listQuizQuestions: ({ quizId, limit, offset, }: ListQuizQuestionsInput) => Promise<{
    total: number;
    limit: number;
    offset: number;
    items: {
        question: string;
        id: number;
        explanation: string | null;
        concept: string | null;
        subject: string | null;
        ncert: boolean;
        ref: string | null;
        options: {
            id: number;
            text: string;
        }[];
    }[];
}>;
export {};
//# sourceMappingURL=quiz.service.d.ts.map