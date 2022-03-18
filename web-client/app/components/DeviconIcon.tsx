interface Props {
  iconName: string;
}

const DeviconIcon: React.FC<Props> = ({ iconName }) => {
  iconName = iconName.trim().toLowerCase();

  /**
   * convert github language name to devicons name
   */
  const icon = {
    html: 'html5',
    html5: 'html5',
    typescript: 'typescript',
    javascript: 'javascript',
    php: 'php',
    vscode: 'vscode',
    python: 'python',
    jupyter: 'jupyter',
    java: 'java',
    kotlin: 'kotlin',
    dart: 'dart',
    rust: 'rust',
    go: 'go',
    heroku: 'heroku',
    c: 'c',
    'c#': 'csharp',
    'c++': 'cplusplus',
  }[iconName];

  return (
    <img
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
      alt="No Icon"
    />
  );
};

export default DeviconIcon;
