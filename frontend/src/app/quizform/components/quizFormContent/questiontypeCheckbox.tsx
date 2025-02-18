import { Stack, Center, Flex } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { BsUiRadios } from "react-icons/bs";

interface QuestionTypeCheckboxProps {
  questionTypes: boolean[];
  setQuestionTypes: (nextValue: boolean[]) => void;
}

const QuestionTypeCheckbox: React.FC<QuestionTypeCheckboxProps> = ({
  questionTypes,
  setQuestionTypes,
}) => {
  return (
    <>
      <Field mt={8} label="Question Type"></Field>
      <Flex w="full" h={10} mt={1.5}>
        <Center
          width="2.5rem"
          borderColor="gray.200"
          borderWidth="1px"
          borderRadius="0.375rem"
          borderTopRightRadius={0}
          borderBottomRightRadius={0}
          borderRightWidth={0}
        >
          <BsUiRadios size={20} />
        </Center>
        <Center
          w="calc(100% - 2.5rem)"
          borderWidth="1px"
          borderRadius="md"
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
        >
          <Stack direction="row" gap={4}>
            <Checkbox
              checked={questionTypes[0]}
              onCheckedChange={() => setQuestionTypes([true, false, false])}
            >
              Any
            </Checkbox>
            <Checkbox
              checked={questionTypes[1]}
              onCheckedChange={() => setQuestionTypes([false, true, false])}
            >
              Multiple Choice
            </Checkbox>
            <Checkbox
              checked={questionTypes[2]}
              onCheckedChange={() => setQuestionTypes([false, false, true])}
            >
              True / False
            </Checkbox>
          </Stack>
        </Center>
      </Flex>
    </>
  );
};

export default QuestionTypeCheckbox;
