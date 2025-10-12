
# Generer un springboot-starter-checkstyle
  Ajout du plugin dans pom.xml

  <properties>
    <java.version>21</java.version>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <checkstyle.version>11.0.1</checkstyle.version>
    <maven.checkstyle.plugin.version>3.6.0</maven.checkstyle.plugin.version>
  </properties>

  <build>
    <plugins>
      <plugin>
          <groupId>org.apache.maven.plugins</groupId>
          <artifactId>maven-checkstyle-plugin</artifactId>
          <version>${maven.checkstyle.plugin.version}</version>
          <configuration>
              <configLocation>checkstyle.xml</configLocation>
              <consoleOutput>true</consoleOutput>
              <failsOnError>false</failsOnError>
          </configuration>
          <dependencies>
              <dependency>
                  <groupId>com.puppycrawl.tools</groupId>
                  <artifactId>checkstyle</artifactId>
                  <version>${checkstyle.version}</version>
              </dependency>
          </dependencies>
      </plugin>
    </plugins>
  </build>


# Test Maven

  mvn clean
  mvn test
  mvn package
  mvn spring-boot:run
  mvn clean verify
  
  mvn checkstyle:check                Vérifier uniquement Checkstyle
  mvn checkstyle:checkstyle           Vérifier + rapport HTML

  Rapport dans
    target/reports/checkstyle.html

# Generation d'un fichier Checkstyle.xml

https://raw.githubusercontent.com/checkstyle/checkstyle/master/src/main/resources/google_checks.xml    


# Parametres Warning ou Error

  Exemple simple

  - Warning
    <module name="AvoidStarImport"/>

  - Error    
	  <module name="AvoidStarImport">
	    <property name="severity" value="error"/>
	  </module>    


  Exemple multiple
  - Warning
    <module name="LineLength">
      <property name="max" value="80"/>
      <property name="ignorePattern" value="^package|^import|http://|https://"/>
    </module>

  - Error
    <module name="LineLength">
      <property name="max" value="80"/>
      <property name="ignorePattern" value="^package|^import|http://|https://"/>
      <property name="severity" value="error"/>
    </module>
  

# Liste des parametres


checkstyle.xml
└─ module: Checker
   ├─ properties: charset=UTF-8, severity=warning|error
   ├─ module: NewlineAtEndOfFile
   ├─ module: FileTabCharacter
   ├─ module: LineLength
   │  └─ properties: max, ignorePattern
   ├─ module: FileLength
   │  └─ properties: max, ignorePattern
   ├─ module: Header
   │  └─ properties: header, fileExtensions
   ├─ module: RegexpHeader
   │  └─ properties: header, multiLines
   ├─ module: RegexpSingleline
   │  └─ properties: format, message, minimum, maximum
   ├─ module: RegexpMultiline
   │  └─ properties: format, message
   ├─ module: Regexp
   │  └─ properties: format, message, illegalPattern
   ├─ module: Translation
   │  └─ properties: baseName, requiredTranslations
   ├─ module: JavadocPackage
   ├─ module: SuppressionFilter
   │  └─ properties: file
   ├─ module: SuppressionXpathFilter
   │  └─ properties: file
   ├─ module: SuppressWithPlainTextCommentFilter
   │  └─ properties: offCommentFormat, onCommentFormat, checkFormat, messageFormat, idFormat
   ├─ module: SuppressWarningsFilter
   │  └─ properties: checkFormat, messageFormat
   ├─ module: SeverityMatchFilter
   │  └─ properties: severity
   ├─ module: BeforeExecutionExclusionFileFilter
   │  └─ properties: fileNamePattern
   └─ module: TreeWalker
      ├─ (Imports)
      │  ├─ module: ImportOrder
      │  │  └─ properties: groups, ordered, separated, option, caseSensitive, staticGroups, separatedStaticGroups, sortStaticImportsAlphabetically, useContainerOrderingForStatic
      │  ├─ module: CustomImportOrder
      │  │  └─ properties: customImportOrderRules, separateLineBetweenGroups, sortImportsInGroupAlphabetically, standardPackageRegExp
      │  ├─ module: AvoidStarImport
      │  ├─ module: UnusedImports
      │  ├─ module: IllegalImport
      │  │  └─ properties: illegalPkgs
      │  └─ module: ImportControl
      │     └─ properties: file
      ├─ (Naming)
      │  ├─ module: PackageName
      │  │  └─ properties: format
      │  ├─ module: TypeName
      │  │  └─ properties: format, applyToPublic, applyToPackage, applyToProtected, applyToPrivate
      │  ├─ module: MethodName
      │  │  └─ properties: format, allowClassName
      │  ├─ module: ParameterName
      │  │  └─ properties: format
      │  ├─ module: LocalVariableName
      │  │  └─ properties: format
      │  ├─ module: MemberName
      │  │  └─ properties: format
      │  ├─ module: StaticVariableName
      │  │  └─ properties: format
      │  ├─ module: ConstantName
      │  │  └─ properties: format
      │  └─ module: RecordComponentName
      │     └─ properties: format
      ├─ (Whitespace / Format)
      │  ├─ module: WhitespaceAround
      │  │  └─ properties: tokens, allowEmptyConstructors, allowEmptyMethods, allowEmptyTypes, allowEmptyLoops
      │  ├─ module: WhitespaceAfter
      │  │  └─ properties: tokens
      │  ├─ module: NoWhitespaceBefore
      │  │  └─ properties: tokens, allowLineBreaks
      │  ├─ module: NoWhitespaceAfter
      │  │  └─ properties: tokens
      │  ├─ module: ParenPad
      │  │  └─ properties: tokens, option
      │  ├─ module: TypecastParenPad
      │  │  └─ properties: option
      │  ├─ module: MethodParamPad
      │  │  └─ properties: option, allowLineBreaks
      │  ├─ module: EmptyForIteratorPad
      │  │  └─ properties: option
      │  ├─ module: GenericWhitespace
      │  └─ module: Indentation
      │     └─ properties: basicOffset, braceAdjustment, caseIndent, lineWrappingIndentation, throwsIndent
      ├─ (Modifiers / Visibility)
      │  ├─ module: ModifierOrder
      │  ├─ module: RedundantModifier
      │  └─ module: VisibilityModifier
      │     └─ properties: protectedAllowed, packageAllowed, allowPublicImmutableFields
      ├─ (Blocks / Braces)
      │  ├─ module: LeftCurly
      │  │  └─ properties: option, tokens, ignoreEnums
      │  ├─ module: RightCurly
      │  │  └─ properties: option, tokens
      │  ├─ module: NeedBraces
      │  │  └─ properties: tokens, allowSingleLineStatement, allowEmptyLoopBody
      │  └─ module: EmptyBlock
      │     └─ properties: option, tokens
      ├─ (Coding)
      │  ├─ module: EmptyStatement
      │  ├─ module: EqualsHashCode
      │  ├─ module: IllegalInstantiation
      │  │  └─ properties: classes
      │  ├─ module: MagicNumber
      │  │  └─ properties: ignoreNumbers, ignoreHashCodeMethod, ignoreAnnotation, ignoreFieldDeclaration, min
      │  ├─ module: ParameterAssignment
      │  ├─ module: OneStatementPerLine
      │  ├─ module: InnerAssignment
      │  │  └─ properties: tokens
      │  ├─ module: AvoidInlineConditionals
      │  ├─ module: ExplicitInitialization
      │  ├─ module: FallThrough
      │  │  └─ properties: reliefPattern
      │  ├─ module: DefaultComesLast
      │  ├─ module: ReturnCount
      │  │  └─ properties: max, tokens
      │  ├─ module: CyclomaticComplexity
      │  │  └─ properties: max
      │  ├─ module: NPathComplexity
      │  │  └─ properties: max
      │  ├─ module: NestedIfDepth
      │  │  └─ properties: max
      │  ├─ module: NestedForDepth
      │  │  └─ properties: max
      │  └─ module: NestedTryDepth
      │     └─ properties: max
      ├─ (Design / Structure)
      │  ├─ module: FinalClass
      │  ├─ module: HideUtilityClassConstructor
      │  ├─ module: InterfaceIsType
      │  ├─ module: OneTopLevelClass
      │  └─ module: DesignForExtension
      ├─ (Javadoc)
      │  ├─ module: JavadocType
