type AttemptInput = {
    quizId: number;
    responses: Array<{
        questionId: number;
        optionId: number;
    }>;
};
type ListAttemptsInput = {
    limit: number;
    offset: number;
};
export declare const submitAttempt: ({ quizId, responses }: AttemptInput) => Promise<{
    attemptId: number;
    score: number;
    accuracy: number;
    totalQuestions: number;
    evaluations: {
        questionId: number;
        optionId: number;
        isCorrect: boolean;
        correctOptionId: number;
    }[];
    allCorrectOptions: {
        [k: string]: number | null;
    };
}>;
export declare const deleteAttempt: (attemptId: number) => Promise<{
    deleted: boolean;
    attemptId: number;
}>;
export declare const listAttempts: ({ limit, offset }: ListAttemptsInput) => Promise<{
    total: number;
    limit: number;
    offset: number;
    items: {
        quizId: number;
        quiz: {
            title: string;
            description: string | null;
        };
        score: number;
        accuracy: number;
        totalQuestions: number;
        createdAt: Date;
        id: number;
    }[];
}>;
export declare const getAttemptById: (attemptId: number) => Promise<{
    quizId: number;
    responses: {
        question: {
            question: string;
            explanation: string | null;
            concept: string | null;
            subject: string | null;
            ncert: boolean;
            options: {
                id: number;
                text: string;
                isCorrect: boolean;
            }[];
        };
        option: {
            text: string;
        };
        questionId: number;
        optionId: number;
    }[];
    quiz: {
        title: string;
        description: string | null;
    };
    score: number;
    accuracy: number;
    totalQuestions: number;
    createdAt: Date;
    id: number;
}>;
export {};
//# sourceMappingURL=attempt.service.d.ts.map