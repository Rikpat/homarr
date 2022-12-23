import { ActionIcon, Button, Text, Tooltip } from '@mantine/core';
import { IconEdit, IconEditOff } from '@tabler/icons';
import { useTranslation } from 'next-i18next';
import { useScreenLargerThan } from '../../../hooks/useScreenLargerThan';
import { useEditModeStore } from './useEditModeStore';

export const ViewToggleButton = () => {
  const screenLargerThanMd = useScreenLargerThan('md');
  const { enabled: isEditMode, toggleEditMode } = useEditModeStore();
  const { t } = useTranslation('layout/header/actions/toggle-edit-mode');

  return (
    <Tooltip
      label={
        <Text align="center">
          In edit mode, you can adjust
          <br />
          the size and position of your tiles.
        </Text>
      }
    >
      {screenLargerThanMd ? (
        <Button
          variant={isEditMode ? 'filled' : 'default'}
          h={44}
          w={180}
          leftIcon={isEditMode ? <IconEditOff /> : <IconEdit />}
          onClick={() => toggleEditMode()}
          color={isEditMode ? 'red' : undefined}
          radius="md"
        >
          <Text>{isEditMode ? t('button.enabled') : t('button.disabled')}</Text>
        </Button>
      ) : (
        <ActionIcon
          onClick={() => toggleEditMode()}
          variant="default"
          radius="md"
          size="xl"
          color="blue"
        >
          {isEditMode ? <IconEditOff /> : <IconEdit />}
        </ActionIcon>
      )}
    </Tooltip>
  );
};
