module.exports = {
  hooks: {
    onCreateRoute: (routeData) => routeData,
    onCreateRequestParams: (rawType) => rawType,
    onParseSchema: (originalSchema, parsedSchema) => parsedSchema,
    onFormatRouteName: (routeInfo, templateRouteName) => {
      // Remove CRUD suffixes that swagger-typescript-api adds based on HTTP methods
      // These suffixes are redundant since the path already indicates the action

      const pathSegments = routeInfo.route.split("/").filter(Boolean)
      const lastPathSegment = pathSegments[pathSegments.length - 1]?.toLowerCase()

      // Always remove HTTP method-based suffixes (Create, Update, Delete, Read)
      // unless they're genuinely part of a different path structure
      const crudActions = ["create", "update", "delete", "read", "add", "remove", "get", "list", "set"]

      let routeName = templateRouteName

      // If the last path segment is a CRUD-like action, remove the method-based suffix
      if (crudActions.includes(lastPathSegment)) {
        routeName = routeName.replace(/(Create|Update|Delete|Read)$/, "")
      }

      // Always append "Fn" to the end
      return `${routeName}Fn`
    },
    onFormatTypeName: (typeName) => {
      // Replace FnData suffix with InputParams
      if (typeName.endsWith("FnData")) {
        return typeName.replace(/FnData$/, "Response")
      }

      return typeName
    },
    onCreateComponent: (component) => component,
  },
}
